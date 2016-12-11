
var Option = React.createClass({
    render:function(){
        return (<div id={this.props.optionId}></div>);
    }//render
});

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

    eachOption: function (i,text,value) {        
        return (
            <Option key={i} optionId={text} optionValue={value}>                
            </Option>
        );
    },

    renderNew:function(optionCount){               
        for(var i=0; i<optionCount; i++){
            return this.eachOption(i,"option-"+this.state.optionText[i],"");
        }        
    },//renderNew

    renderFromDB:function(optionCount){
        //retrieve data from db and call eachOption with value
        return <div></div>;
    },//renderFromDB

    shouldComponentUpdate: function () {        
        return false;
    },//shouldComponentUpdate

    render:function(){
        var optionCount = this.optionCount();
        if(this.props.action == "create"){
            return this.renderNew(optionCount);
        }
        else if(this.props.action == "edit"){
            return this.renderFromDB(optionCount);
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
                <textarea id={this.props.questionId} rows="5" cols="50">
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


