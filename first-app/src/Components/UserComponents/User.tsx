import './User.css'

function UserComponent(props){
    let name = props.name
    let sername = props.sername
    let firstLetter = name[0]
    let secondLetter = sername[0]
    return (
        <div className="userInitials">
            <div className='Letters'>
                {firstLetter}
                {secondLetter}
            </div>
            <div className='fullName'>
                {name + ' ' + sername}
            </div>
        </div>
    )
}

export default UserComponent