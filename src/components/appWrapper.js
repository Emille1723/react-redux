import Form from './form';
import UsersList from './usersList';
// import TaskList from './taskList';
// import TaskView from './taskView';

const AppWrapper = () =>{
    return(
        <div className="app--wrapper">
			<UsersList />
            <Form />
            {/* <TaskList />
            <TaskView /> */}
        </div>
    )
}


export default AppWrapper;