import "./Modal.css";

function Modal(props) {
    const { open, close } = props;

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
            <section>
                <main>{props.children}</main>
                <footer>
                <button className="close" onClick={close}>
                    확인
                </button>
                </footer>
            </section>
            ) : null}
        </div>
        );
}

export default Modal; 
