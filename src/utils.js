// use strict

module.exports.generateToken = ({ testerId }, testers) => {
  const filteredProfile = testers.find(({ id }) => id === testerId)

  if (filteredProfile && filteredProfile.accountId) {
    return JSON.stringify({
      accountId: filteredProfile.accountId,
    })
  } else {
    return null
  }
}
