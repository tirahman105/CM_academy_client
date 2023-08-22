import React from 'react';

function OptionForm({ index, option, onChange }) {
    return (
        <div className="mb-2">
            <input
                type="text"
                className="w-full p-2 border rounded"
                value={option}
                onChange={(e) => onChange(index, e.target.value)}
            />
        </div>
    );
}

export default OptionForm;
