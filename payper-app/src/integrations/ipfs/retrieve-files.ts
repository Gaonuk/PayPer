import makeStorageClient from "./make-storage-client"

export default async function retrieveFiles(): Promise<File> {
  const cid = "bafybeiaqo4e4vnzhttvxwjjgaskmvx4rft4lunajl3uzc7igmrb4bobjpe"
  const client = makeStorageClient()
  const res = await client.get(cid)
  if (!res) {
    throw new Error(`failed retrieve`)
  }
  console.log(`Got a response! [${res.status}] ${res.statusText}`)
  if (!res.ok) {
    throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
  }

  // unpack File objects from the response
  const files = await res.files()
  console.log('files: ', files);
  return files[0];
}