window.QeustionBoard = React.createClass({


    shouldComponentUpdate: function () {
        //Never update board component
        return false;
    },//shouldComponentUpdate


    renderQuestion: function () {
        return (
            <Question id={this.props.id}></Question>
        );
    },//renderQuestion

    renderOptions: function () {
        var options = this.state.options;
    },//rednerOptions

    render: function () {
        return (
            <div className="col-md-12">
                {this.renderQuestion()}
            </div>
        );
    },//render
});

