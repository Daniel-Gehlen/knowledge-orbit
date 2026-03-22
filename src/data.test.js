import { describe, it, expect } from 'vitest';
import { topics } from './data/topics';
import { flashcards } from './data/flashcards';

describe('Knowledge Orbit Data Integrity', () => {
    it('should have topics defined', () => {
        expect(topics).toBeDefined();
        expect(Array.isArray(topics)).toBe(true);
        expect(topics.length).toBeGreaterThan(0);
    });

    it('should have flashcards defined', () => {
        expect(flashcards).toBeDefined();
        expect(typeof flashcards).toBe('object');
        expect(Object.keys(flashcards).length).toBeGreaterThan(0);
    });

    it('should have valid topic IDs in topics', () => {
        topics.forEach(topic => {
            expect(topic.id).toBeDefined();
            expect(typeof topic.id).toBe('string');
        });
    });
});
