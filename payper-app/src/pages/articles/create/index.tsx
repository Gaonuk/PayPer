"use client"

import Link from "next/link"
import EditorJS from "@editorjs/editorjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import TextareaAutosize from "react-textarea-autosize"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { postPatchSchema } from "@/lib/validations/post"
import { buttonVariants } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
import { useCallback, useEffect, useRef, useState } from "react"
import { usePostArticle } from "@/integrations/payper-protocol/hooks/write"
import storeFiles from "@/integrations/ipfs/use-store-files"

type FormData = z.infer<typeof postPatchSchema>

export default function Editor() {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(postPatchSchema),
  })
  const ref = useRef<EditorJS>()
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [data, setData] = useState<FormData>();
  const [articleUrl, setArticleUrl] = useState<string>('');
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const { toast } = useToast();


  const { sendTransaction, isLoading } = usePostArticle({
    name: data?.title ?? "Untitled Post",
    freeContent: data?.description ?? "No description",
    imageUrl: data?.imageUrl ?? "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww",
    articleUrl,
    videoUrl: "",
    price: 1000000000000000n,
    newsType: 0n,
  });

  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default
    const Header = (await import("@editorjs/header")).default

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor
        },
        placeholder: "Type here to write your post...",
        inlineToolbar: true,
        tools: {
          header: Header,
        },
      })
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true)
    }
  }, [])

  useEffect(() => {
    if (isMounted) {
      initializeEditor()

      return () => {
        ref.current?.destroy()
        ref.current = undefined
      }
    }
  }, [isMounted, initializeEditor])

  async function onSubmit(data: FormData) {
    setData(data);

    const blocks = await ref.current?.save()
    console.log('blocks', blocks);

    const blob = new Blob([JSON.stringify({
      title: data.title,
      content: blocks
    })], { type: 'application/json' })

    const files = [
      new File([blob], 'content.json')
    ]

    const cid = await storeFiles(files);
    console.log('yay cid', cid);
    setArticleUrl(`https://${cid}.ipfs.w3s.link/content.json`);
    return toast({
      description: "Your post has been published!",
    })
  }

  if (!isMounted) {
    return null
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full gap-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link
              href="/dashboard"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              <>
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                Back
              </>
            </Link>
          </div>
          <button type="submit" className={cn(buttonVariants())}>
            {isSaving && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>Store on IPFS</span>
          </button>
          <button type="button" className={cn(buttonVariants())} onClick={sendTransaction}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>Publish</span>
          </button>
        </div>
        <div className="prose prose-stone mx-auto w-[800px] space-y-10 dark:prose-invert">
          <TextareaAutosize
            autoFocus
            id="title"
            placeholder="Post title"
            className="w-full resize-none text-center appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
            {...register("title")}
          />
          <TextareaAutosize
            id="imageUrl"
            placeholder="Please input a cover image url for your article"
            className="w-full resize-none text-center appearance-none overflow-hidden bg-transparent text-s font-bold"
            {...register("imageUrl")}
          />
          <TextareaAutosize
            id="description"
            placeholder="Please input a free description of your article"
            className="w-full resize-none text-center appearance-none overflow-hidden bg-transparent text-s font-bold focus:outline-none"
            {...register("description")}
          />
          <div id="editor" className="min-h-[500px]" />
          <p className="text-sm text-gray-500">
            Use{" "}
            <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
              Tab
            </kbd>{" "}
            to open the command menu.
          </p>
        </div>
      </div>
    </form>
  )
}