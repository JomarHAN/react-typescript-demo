type TypeStatus = {
    status: 'success' | 'loading' | 'error'
}

export const Status = (props: TypeStatus) => {
    let message

    if(props.status === 'loading'){
        message = "Loading ..."
    } else if (props.status === 'success'){
        message = "Data fetched successfully!"
    } else if(props.status === 'error'){
        message = "Error fetching data"
    }

    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}