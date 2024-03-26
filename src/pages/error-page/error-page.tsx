import './error-page.css'

export const ErrorPage: React.FC = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__heading">404</h1>
      <p className="error-page__text">Страница или запрашиваемый ресурс не найдены...</p>
      <a className="error-page__link" href="/">Вернуться на главную</a>
    </div>
  )
}
