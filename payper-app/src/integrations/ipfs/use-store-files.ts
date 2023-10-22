import { toast } from "@/components/ui/use-toast"
import makeStorageClient from "./make-storage-client"

export default function storeFiles(files: any[]) {
  const client = makeStorageClient()

  const onRootCidReady = (cid: number) => {
    console.log('uploading files with cid:', cid)
  }

  // when each chunk is stored, update the percentage complete and display
  const totalSize = files.map(f => f.size).reduce((a, b) => a + b, 0)
  let uploaded = 0

  const onStoredChunk = (size: number) => {
    uploaded += size
    const pct = 100 * (uploaded / totalSize)
    console.log(`Uploading... ${pct.toFixed(2)}% complete`)
  }

  return client.put(files, { onRootCidReady, onStoredChunk })
}