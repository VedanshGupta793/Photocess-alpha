"use client";
import { store } from '@/Redux/Store';
import React from 'react'
import { Provider } from 'react-redux'

export default function ReduxProvider(
    { children }: { children: React.ReactNode }
) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
