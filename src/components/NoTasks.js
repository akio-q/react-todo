import clipboardText from '../img/clipboardText.png'

const NoTasks = () => {
    return (
        <div className='empty-page'>
            <img src={clipboardText} className='empty-page__img' alt="Blank" />
            <strong>You don't have any tasks yet.</strong>
            <p className='empty-page__text'>Create tasks and organize your todo items</p>
        </div>
    )
}

export default NoTasks;