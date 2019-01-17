import React, {Component} from 'react'
import { Card } from 'antd';
import BaseLayout from '../layouts/BaseLayout.jsx'
import CreateUserForm from '../components/form/CreateUserForm.jsx'

class Home extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <BaseLayout>
                <Card title="Create New User" bordered={false}>
                    <CreateUserForm/>
                </Card>
            </BaseLayout>
            )
    }
}

export default Home;