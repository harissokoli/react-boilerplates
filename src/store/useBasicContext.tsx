import create from 'zustand';

type BasicState = {
	number: number;
	increaseNumber: () => void;
	resetNumber: () => void;
	isLoggedIn: boolean;
};

const useBasicStore = create<BasicState>((set) => ({
	number: 0,
	increaseNumber: () => set((state) => ({ number: state.number + 10 })),
	resetNumber: () => set({ number: 0 }),
	isLoggedIn: false,
}));

export { useBasicStore };
