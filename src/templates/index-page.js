import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Content, { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({
  html,
  contentComponent
}) => {
  const PageContent = contentComponent || Content
  return  (
    <div>
      <PageContent content={html} />
    </div>
  )
}

IndexPageTemplate.propTypes = {
  body: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { markdownRemark  } = data

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={ HTMLContent }
        html={markdownRemark.html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
    }
  }
`
