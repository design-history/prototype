import { wizard } from 'govuk-prototype-rig'

export function newUserWizard (req) {
  const journey = {
    '/admin/start': {},
    '/admin/new-user/email': {},
    '/admin/new-user/confirm-email': {},
    '/admin/new-user/create-password': {},
    '/admin/dashboard': {}
  }

  return wizard(journey, req)
}
