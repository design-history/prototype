import { newDesignHistoryWizard } from '../wizards/new-design-history.js'

export const newDesignHistoryRoutes = router => {
  /**
   * Example routes to demonstrate using wizard helper.
   */
  router.all([
    '/admin/new',
    '/admin/new/:view'
  ], (req, res, next) => {
    res.locals.paths = newDesignHistoryWizard(req)
    next()
  })

  router.post('/admin/new/:view', (req, res) => {
    res.redirect(res.locals.paths.next)
  })
}
