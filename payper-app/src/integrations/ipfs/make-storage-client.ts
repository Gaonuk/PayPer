import { Web3Storage } from 'web3.storage'
import getAccessToken from './get-access-token'

export default function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() })
}