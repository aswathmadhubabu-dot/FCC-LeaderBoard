import React, { Component } from 'react';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    search() {

        const users = [];
        this.setState({ users });
        console.log();
        var baseURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
        console.log(baseURL);
        fetch(baseURL, {
            method: 'GET'
        }).then(response => response.json())
            .then(json => {
                console.log(json);
                const users = json;
                this.setState({ users });
                console.log(this.state.users);
            });
    }
    searchall() {
        const users = [];
        this.setState({ users });
        console.log();
        var baseURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
        console.log(baseURL);
        fetch(baseURL, {
            method: 'GET'
        }).then(response => response.json())
            .then(json => {
                console.log(json);
                const users = json;
                this.setState({ users });
                console.log(this.state.users);
            });
    }


    render() {
        return (<div className='main'>
        <div class="card card-block">
    <h4 class="card-title">Panel title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="flex-row">
        <a class="card-link">Card link</a>
        <a class="card-link">Another link</a>
    </div>
</div>
<button className='btn btn-success text-center' onClick={() => this.search()}>Recent &nbsp; <i class="fa fa-history"></i>
</button>
            <button className='btn btn-success text-center' onClick={() => this.searchall()}>
All Time &nbsp; <i class="fa fa-rocket"></i></button>
            <div className="title text-center">FreeCodeCamp Leaderboard</div>
            <table className='table table-bordered display' id="mytable" cellSpacing="0" width="100%" data={this.state.users}>
                <thead>
                    <tr>
                        <td className="nr">#</td>
                        <td colSpan="2">Username</td>
                        <td id="recent" className=" tdRecent">Points in past 30 days</td>
                        <td id="alltime" className="highlight tdAlltime">All time points</td>
                        <td id="lastUpdated" className="highlight tdlastUpdated">Last Updated Time</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(function (user, index) {
                            return <tr className="table" key={index}>

                                <td>{index}</td>
                                <td className="avatar">
                                    <img className='img img-responsive' src={user.img} alt='' />
                                </td>
                                <td className="username">{user.username}</td>
                                <td className="tdRecent">{user.recent}</td>
                                <td className="tdAlltime">{user.alltime}</td>
                                <td className="lastUpdated">{user.lastUpdate}</td>
                            </tr>;
                        })}
                </tbody>
            </table>

        </div>)
    };

};

export default App;