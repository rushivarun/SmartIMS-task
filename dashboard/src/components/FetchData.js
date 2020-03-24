import React from 'react';
import firebase from 'firebase';
import { Spin, Layout, Menu, Breadcrumb } from 'antd';
import firebaseConfig from './Fireconfig';
import Card from './FacultyCard';
const { Meta } = Card;
const { Header, Content, Footer } = Layout;
export const fire_init_app = firebase.initializeApp(firebaseConfig);
var DB = firebase.database()

const listt = []


class FetchData extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Teacherlist : [],
            loading : true
        }
    }

    componentDidMount() {
        setTimeout(async () => {
            const dataRef = await DB.ref('faculty/').on('child_added', snaps => {
            this.setState({
                Teacherlist : [snaps.val()]
            })
            listt.push(snaps.val())
            })
            console.log(listt)

            this.setState({loading : false})
        }, 3000);
    }


    render() {
        return(
            <Layout className="layout">
                <Header>
                </Header>
                <Content >
                    <h1 className="center f1" >Cornell Faculty List</h1>
                    <div className="w-100">
                        {
                            listt.map((value, i) => {
                            return(
                            <Card
                                key={i}
                                images = {value.image}
                                name={value.name}
                                position={value.position}
                            />
                            )})
                        }

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Created by Rushi Varun</Footer>
            </Layout>
        )
    }
}

export default FetchData;
