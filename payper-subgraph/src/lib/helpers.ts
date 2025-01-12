import { BigInt,log } from "@graphprotocol/graph-ts"
import { EpnsNotificationCounter, EpnsPushNotification } from '../../generated/schema'

export function sendPushNotification(recipient: string, notification: string): void 
{
  const subgraphID = "efesozen7/payper-test-1"
  let id1 = subgraphID

  let epnsNotificationCounter = EpnsNotificationCounter.load(id1)
  if (epnsNotificationCounter == null) {
    epnsNotificationCounter = new EpnsNotificationCounter(id1)
    epnsNotificationCounter.totalCount = BigInt.fromI32(0)
  }
  epnsNotificationCounter.totalCount = (epnsNotificationCounter.totalCount).plus(BigInt.fromI32(1))

  let count = epnsNotificationCounter.totalCount.toHexString()
  let id2 = `${subgraphID}+${count}`

  let epnsPushNotification = EpnsPushNotification.load(id2)
  if (epnsPushNotification == null) {
    epnsPushNotification = new EpnsPushNotification(id2)
  }
  epnsPushNotification.recipient = recipient
  epnsPushNotification.notification = notification
  epnsPushNotification.notificationNumber = epnsNotificationCounter.totalCount
  epnsPushNotification.save()
  epnsNotificationCounter.save()
}