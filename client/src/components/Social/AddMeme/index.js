import { useState } from 'react';
import { history } from '../../../utils/history';
import { connect } from 'react-redux';
import { httpSocial } from '../../../services/http';
import schema from './add-meme-validations';
import { toastSuccess, toastError } from '../../../utils/toastHandler';
import { componentData } from '../../../class-names.json';
import Button from '../../Button';

function AddMeme(props) {
    const title = useFormInput('');
    const imageUrl = useFormInput('');
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        const meme = {
            title: title.value,
            imageUrl: imageUrl.value,
        };
        const hasErrors = Object.keys(errors).filter((key) => errors[key].length > 0);

        console.log(imageUrl);

        const test = 'https://img-9gag-fun.9cache.com/photo/aZy609p_460swp.webp';
        const img = new Image();
        img.src = test;

        console.log(img.width);
        console.log(img.height);
        // async function fetchData() {
        //     const response = await fetch(test, {
        //         headers: {
        //             'Access-Control-Allow-Origin': '*',
        //             'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        //             'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        //         },
        //     });
        //     console.log(response);
        //     const data = await response.json();
        //     console.log(data);
        // }
        // fetchData();

        // if (hasErrors.length === 0 && meme.title && meme.imageUrl && props.isLogin) {
        //     httpSocial
        //         .addMeme(meme)
        //         .then((res) => {
        //             toastSuccess(res);
        //             history.push('/social');
        //         })
        //         .catch((err) => {
        //             toastError(err);
        //         });
        // }
    }

    function useFormInput(initialValue) {
        const [value, setValue] = useState(initialValue);

        function handleChange(event) {
            setValue(event.target.value);
            validate(event);
        }

        function validate(event) {
            const name = event.target.id;

            schema.fields[name]
                .validate(event.target.value, { abortEarly: false })
                .then(() => {
                    setErrors({ ...errors, [name]: [] });
                })
                .catch((err) => {
                    setErrors({ ...errors, [name]: err.errors });
                });
        }

        return { value, onChange: handleChange };
    }

    return (
        <section className={`${componentData}`}>
            <form>
                <div className="form-div-container">
                    <label htmlFor="Title">
                        <b>Title:</b>
                    </label>
                    <input type="text" placeholder="Write some funny title" className="form-input" id="title" onChange={useFormInput} {...title} />
                    {errors.title && <div className="form-input-error">{errors.title[0]}</div>}
                </div>

                <div className="form-div-container">
                    <label htmlFor="imageUrl">
                        <b>imageUrl:</b>
                    </label>
                    <input type="text" placeholder="Copy and Paste your memeURL here" className="form-input" id="imageUrl" onChange={useFormInput} {...imageUrl} />
                    {errors.imageUrl && <div className="form-input-error">{errors.imageUrl[0]}</div>}
                </div>

                <div>
                    <Button additionalClassName="form-action-btn" buttonText="Submit" functionPressButton={handleSubmit} />
                </div>
            </form>
        </section>
    );
}

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
    };
}

export default connect(mapStateToProps)(AddMeme);
