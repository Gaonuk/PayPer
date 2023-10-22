import { CIDString } from "web3.storage/dist/src/lib/interface"
import makeStorageClient from "./make-storage-client"

export default function storeFiles(files: any[]) {
  const client = makeStorageClient()

  const onRootCidReady = (cid: CIDString) => {
    console.log('uploading files with cid:', cid)
  }

  const totalSize = files.map(f => f.size).reduce((a, b) => a + b, 0)
  let uploaded = 0

  const onStoredChunk = (size: number) => {
    uploaded += size
    const pct = 100 * (uploaded / totalSize)
    console.log(`Uploading... ${pct.toFixed(2)}% complete`)
  }

  return client.put(files, { onRootCidReady, onStoredChunk })
}