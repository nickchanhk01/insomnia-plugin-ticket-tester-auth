// use strict

const { generateToken } = require('./utils')

module.exports = function(context) {
  const headers = context.request.getEnvironmentVariable(
    'TICKET_SERVICE_TESTER'
  )

  if (
    !headers ||
    !headers.enabledTesterId ||
    !headers.testers ||
    !Array.isArray(headers.testers)
  ) {
    return
  }

  const authToken = generateToken(
    {
      testerId: headers.enabledTesterId,
    },
    headers.testers
  )

  if (!authToken) {
    return
  }

  context.request.setHeader('Authorization', `hktester ${authToken}`)
}
