import './Container.css'

const Container = (props) => {
    return <div className="bd-container">
        {props.children}
    </div>
}

export default Container;