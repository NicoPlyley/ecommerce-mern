import {Helmet} from 'react-helmet'

const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To eCommerce',
  description: 'We sell products...not really',
  keywords: 'stuff, buy stuff, cheap stuff'
}

export default Meta
