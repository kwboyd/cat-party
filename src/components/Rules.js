import React from 'react';
import './Rules.scss';

const Rules = () => {
    return (
        <div className="rules">
            <h1>🐈🐈🐈&nbsp;Cat Party&nbsp;🐈🐈🐈</h1>
            <ul>
                <li><p>Each cat has two genes for eyes, nose, and whiskers.</p></li>
                <li><p>Some genes are recessive and some are dominant (dominant genes shown in bold/italic).</p></li>
                <li><p>Dominant genes will show over recessive ones.</p></li>
                <li><p>A mix of two dominant or two recessive will show as a unique combination of those two genes.</p></li>
                <li><p>You can pick two cats to breed. Their kitten will inherit a random combination of their genes.</p></li>
                <li><p>Names, poses, and sex are random!</p></li>
                <li><p>Want some fresh genes? Generate a random cat.</p></li>
            </ul>
        </div>
    )
}

export default Rules;