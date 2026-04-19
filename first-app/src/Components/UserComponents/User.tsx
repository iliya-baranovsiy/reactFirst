import './User.css'

function UserComponent(props){
    let name: string = props.name
    let sername = props.sername
    return (
        <div className="userInitials">
            <div className='Letters'>
                {name[0].toUpperCase()}
                {sername[0].toUpperCase()}
            </div>
            <div className='fullName'>
                {name + ' ' + sername}
            </div>
        </div>
    )
}

export default UserComponent