import { wizard } from 'govuk-prototype-rig'

export function newUserWizard (req) {
  const journey = {
    '/start': {},
    '/new-user/email': {},
    '/new-user/confirm-email': {},
    '/new-user/create-password': {},
    '/dashboard': {}
  }

  return wizard(journey, req)
}
