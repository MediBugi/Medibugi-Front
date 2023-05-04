import "./Modal.css";

function LoginModal(props) {
    const { open, close } = props;

    const pageMove = () => {
        document.location.href="/login";
    }
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
            <section>
                <main>{props.children}</main>
                <footer>
                <button className="close" onClick={pageMove}>
                    확인
                </button>
                <button className="close" onClick={close}>
                    취소
                </button>
                </footer>
            </section>
            ) : null}
        </div>
    );
}

export default LoginModal;