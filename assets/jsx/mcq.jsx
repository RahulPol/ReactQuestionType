
var OptionSet = React.createClass({

    getInitialState:function(){
        return {
            optionText:['A','B','C','D','E','F']
        }
    },

    optionCount: function(){
        if(this.props.action == 'create'){
            return 4;
        }
        else if(this.props.action == 'edit'){
            //call db with question id as this.props.questionId and get the count
            return 6;
        }
    },//optionCount

    renderNew:function(){

    },//renderNew

    renderFromDB:function(){

    },//renderFromDB

    shouldComponentUpdate: function () {        
        return false;
    },//shouldComponentUpdate

    render:function(){
        var totalOptions = this.optionCount();
        if(this.props.action == "create"){
            return this.renderNew();
        }
        else if(this.props.action == "edit"){
            return this.renderFromDB();
        }
    }//render
});

var Question = React.createClass({

    componentDidMount: function () {
        CKEDITOR.replace(this.props.questionId);
        if(this.props.action == "create"){
            //
        }
        else if(this.props.action == "edit"){
            //get question body data from ajax and update CKEDITOR
            var data = "<b>Test this!</b>";
            CKEDITOR.instances[this.props.questionId].setData(data);
        }
    },//componentDidMount

    render:function(){
        return (
            <div className="question-body">
                <textarea id={this.props.questionId} rows="5" cols="50" >
                </textarea>
            </div>
        );
    }//render

});


window.Board = React.createClass({

    render:function(){
        return(
            <div className="mcq-board well well-bg">
                <div className="question-header">
                    <span className="question-title">Question</span>
                    <span className="pull-right"> 
                        <button className="btn btn-success">Save</button> 
                    </span>
                </div>
                <div className="question">
                    <Question action={this.props.action} questionId={this.props.questionId}></Question>
                    <OptionSet action={this.props.action} questionId={this.props.questionId}></OptionSet>
                </div>

            </div>
        );
    }//render

});


