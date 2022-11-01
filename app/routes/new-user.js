import { newUserWizard } from '../wizards/new-user.js'

export const newUserRoutes = router => {
  /**
   * Example routes to demonstrate using wizard helper.
   */
  router.all([
    '/admin/new-user',
    '/admin/new-user/:view'
  ], (req, res, next) => {
    res.locals.paths = newUserWizard(req)
    next()
  })

  router.post('/admin/new-user/:view', (req, res) => {
    res.redirect(res.locals.paths.next)
  })
}
