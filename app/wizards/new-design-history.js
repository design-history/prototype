import { wizard } from 'govuk-prototype-rig'

export function newDesignHistoryWizard (req) {
  const journey = {
    '/new': {},
    '/new/name': {},
    '/new/domain': {},
    '/new/style': {},
    '/new/type': {},
    '/new/private': {},
    '/new/check-answers': {}
  }

  return wizard(journey, req)
}
