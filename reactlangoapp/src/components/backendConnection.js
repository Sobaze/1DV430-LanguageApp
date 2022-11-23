import { Component } from "react"

class Connect extends Component {
    state = {
        data: null
      }
    
      componentDidMount() {
        this.callBackendAPI()
          .then(res => this.setState({ data: res.express }))
          .catch(error => console.log(error))
      }
    
      callBackendAPI = async () => {
        const response = await fetch('/express_backend')
        const body = await response.json()
    
        if (response.status !== 200) {
          throw Error(body.message)
        }
        return body
      }
}

export default Connect
