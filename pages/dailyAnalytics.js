import React from 'react'
import Layout from '../components/layout'

// const  DailyAnalytics = () => (
const sayHelloWorld = () => {
  return (
    <Layout>
      <h1>what are you doing here? hello</h1>
    </Layout>
  )
}
// )

export default class DailyAnalytics extends React.Component{
    sayHelloWorld(){
        return (
            <Layout>
            <h1>Hello there</h1>
          </Layout>
        )
    }



    render(){
        return this.sayHelloWorld()
    }
}





