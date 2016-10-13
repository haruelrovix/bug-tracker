var BugFilter = React.createClass({
    render: function() {
        console.log("Rendering BugFilter");
        return (
            <div>A way to filter the list of bugs would come here.</div>
        )
    }
});

var BugRow = React.createClass({
    render: function() {
        console.log("Rendering BugRow", this.props.bug);
        return (
            <tr>
                <td>{this.props.bug.id}</td>
                <td>{this.props.bug.status}</td>
                <td>{this.props.bug.priority}</td>
                <td>{this.props.bug.owner}</td>
                <td>{this.props.bug.title}</td>                
            </tr>
        )
    }
});

var BugTable = React.createClass({
    render: function() {
        console.log("Rendering bug table, num items:", this.props.bugs.length);
        var bugRows = this.props.bugs.map(function(bug) {
            return <BugRow key={bug.id} bug={bug} />
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Owner</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {bugRows}
                </tbody>
            </table>
        )
    }
});

var BugAdd = React.createClass({
    render: function() {
        console.log("Rendering BugAdd");
        return (
            <div>A form to add a new bug would come here.</div>
        )
    }
});

var bugData = [
    { id:1, priority:'P1', status:'Open', owner:'Havit', title:'App crashes on open' },
    { id:2, priority:'P2', status:'New', owner:'Rovik', title:'Misaligned border on panel' }
];

var BugList = React.createClass({
    getInitialState: function() {
        return {bugs: bugData}
    },
    render: function() {
        console.log("Rendering bug list, num items:", this.state.bugs.length);
        return (
            <div>
                <h1>Bug Tracker</h1>
                <BugFilter />
                <hr />
                <BugTable bugs={this.state.bugs} />
                <button onClick={this.testNewBug}>Add Bug</button>
                <hr />
                <BugAdd />
            </div>
        )
    },

    testNewBug: function() {
        var nextId = this.state.bugs.length + 1;
        this.addBug({
            id: nextId, priority: 'P2', status:'New', owner:'Haru', title:'Warning on console'
        })
    },

    addBug: function(bug) {
        console.log("Adding bug:", bug);
        var bugsModified = this.state.bugs.slice();
        bugsModified.push(bug);
        this.setState({
            bugs: bugsModified
        });
    }
});

ReactDOM.render(
    <BugList />,
    document.getElementById('main')
);