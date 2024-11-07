import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

const HeadlessDemo = () => {
    const toast = useRef(null); // Create a ref for the toast component

    const accept = () => {
        toast.current.show({
            severity: 'info',
            summary: 'Confirmed',
            detail: 'You have accepted',
            life: 3000
        });
    };

    const reject = () => {
        toast.current.show({
            severity: 'warn',
            summary: 'Rejected',
            detail: 'You have rejected',
            life: 3000
        });
    };

    const confirm1 = () => {
        confirmDialog({
            group: 'headless',
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog
                group="headless"
                content={({ headerRef, contentRef, footerRef, hide, message }) => (
                    <div className="flex flex-col items-center p-5 bg-white shadow-lg rounded-lg">
                        <div className="border border-primary-500 bg-primary-100 rounded-full flex justify-center items-center h-24 w-24 -mt-8">
                            <i className="pi pi-trash text-5xl  text-danger"></i>
                            {/* Add Delete Icon Here */}
                        </div>
                        <span className="font-bold text-xl block mb-2 mt-4" ref={headerRef}>
                            {message.header}
                        </span>
                        <p className="mb-0 text-gray-700" ref={contentRef}>
                            {message.message}
                        </p>
                        <div className="flex items-center gap-2 mt-4" ref={footerRef}>
                            <Button
                                label="Save"
                                onClick={(event) => {
                                    hide(event);
                                    accept();
                                }}
                                className="w-32 bg-green-500 hover:bg-green-600 text-white"
                            />
                            <Button
                                label="Cancel"
                                outlined
                                onClick={(event) => {
                                    hide(event);
                                    reject();
                                }}
                                className="w-32 border-gray-400 text-gray-700 hover:bg-gray-200"
                            />
                        </div>
                    </div>
                )}
            />
            <div className="card flex flex-wrap gap-2 justify-center">
                <Button onClick={confirm1} icon="pi pi-trash"  />
              
            </div>
        </>
    );
}

export default HeadlessDemo;
