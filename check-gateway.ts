import { createGateway } from 'ai';
const g = createGateway({ apiKey: 'test' });
console.log('Type of g:', typeof g);
console.log('Type of g.getAvailableModels:', typeof (g as any).getAvailableModels);
