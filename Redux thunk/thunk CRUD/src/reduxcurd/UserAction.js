import axios from "axios"

export const add = 'INSERT'
export const insert = 'ADDDATA'
export const deletekey = 'DELETE'


export const addfun = () => {
    return async (dispatch) => {
        try {
            const GetApi = await axios.get('http://localhost:3333/data');
            dispatch({
                type: add,
                payload: GetApi.data
            })
        }
        catch (error) {
            console.log('fatch erroe occurd', error)
        }

    }


}
export const insertfun = (i) => {
    return async (dispatch) => {
        try {
            const GetApi = await axios.post('http://localhost:3333/data', i);
            dispatch({
                type: insert,
                payload: GetApi.data
            })
        }
        catch (error) {
            console.log('insert data error', error)
        }
    }
}

export const deletedatafun = (id) => {
    return async (dispatch) => {
        // console.log('Deleting item with id:', id); 
        try {
            const response = await axios.delete(`http://localhost:3333/data/${id}`);
            dispatch({
                type: 'DELETE_DATA',
                payload: id
            });
            dispatch(addfun());
        } catch (error) {
            console.error('Delete data error:', error);
        }
    };
};




