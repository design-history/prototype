import { wizard } from 'govuk-prototype-rig'

export function newDesignHistoryWizard (req) {
  const journey = {
    '/admin/dashboard': {},
    '/admin/new/name': {},
    '/admin/new/domain': {},
    '/admin/new/style': {},
    '/admin/new/private': {},
    '/admin/new/check-answers': {}
  }

  return wizard(journey, req)
}
