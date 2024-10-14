import { createSlice } from "@reduxjs/toolkit";

export const theme = createSlice({
    name: 'theme',
    initialState: {
        theme: {
            bg: '#1A1A1A',
            primary: '#FFFFFF',
            secondary: '#B3B3B3',
            accentColor: '#3B82F6',
            linkHoverColor: '#1D4ED8',
            card: '#E0E0E0',
            textColor: '#FFFFFF'
        }
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        }
    }
});

export const {setTheme} = theme.actions;
export default theme.reducer;