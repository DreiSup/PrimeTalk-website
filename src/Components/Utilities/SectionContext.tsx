import React, { createContext, useContext, useState } from 'react';

// Definir el tipo de contexto
interface SectionContextType {
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

// Crear el contexto con un valor predeterminado
const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeSection, setActiveSection] = useState('Hero');

    return (
        <SectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </SectionContext.Provider>
    );
};

export const useSection = () => {
    const context = useContext(SectionContext);
    if (context === undefined) {
        throw new Error('useSection must be used within a SectionProvider');
    }
    return context;
};
