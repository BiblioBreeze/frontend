export const Register = () => {
    return (
        <div>
            <form>
                <label>Email</label>
                <input type="email" name="email" placeholder="Email"/>

                <label>First name</label>
                <input type="text" name="first_name" placeholder="First name"/>

                <label>Last name</label>
                <input type="text" name="last_name" placeholder="Last name"/>

                <label>Password</label>
                <input type="password" name="password" placeholder="Password"/>

                <input type="submit" value="Register"/>
            </form>
        </div>
    )
}