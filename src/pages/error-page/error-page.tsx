import './error-page.css'

export const ErrorPage: React.FC = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__heading">404</h1>
      <p className="error-page__text">Page or requested resource not found...</p>
      <a className="error-page__link" href="/">
        Go back to the main page
      </a>
    </div>
  )
}
