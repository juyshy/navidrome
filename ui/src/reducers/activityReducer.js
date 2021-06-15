import {
  EVENT_REFRESH_RESOURCE,
  EVENT_SCAN_STATUS,
  EVENT_SERVER_START,
} from '../actions'

const defaultState = {
  scanStatus: { scanning: false, folderCount: 0, count: 0 },
}

export const activityReducer = (
  previousState = {
    scanStatus: defaultState,
  },
  payload
) => {
  const { type, data } = payload
  switch (type) {
    case EVENT_SCAN_STATUS:
      return { ...previousState, scanStatus: data }
    case EVENT_SERVER_START:
      return {
        ...previousState,
        serverStart: {
          startTime: data.startTime && Date.parse(data.startTime),
        },
      }
    case EVENT_REFRESH_RESOURCE:
      return {
        ...previousState,
        refresh: {
          lastReceived: Date.now(),
          resources: data,
        },
      }
    default:
      return previousState
  }
}
