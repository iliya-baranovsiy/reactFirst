import './User.css'

function UserComponent(props){
    let name = props.name
    let sername = props.sername
    return (
        <div className="userInitials">
            <div className='Letters'>
                {name[0]}
                {sername[0]}
            </div>
            <div className='fullName'>
                {name + ' ' + sername}
            </div>
        </div>
    )
}

export default UserComponent