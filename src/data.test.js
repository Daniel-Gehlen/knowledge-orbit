import { describe, it, expect } from 'vitest';
import { topics } from './data/topics';
import { flashcards } from './data/flashcards';
import { knowledge } from './data/knowledge';

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

    it('should have knowledge defined', () => {
        expect(knowledge).toBeDefined();
        expect(typeof knowledge).toBe('object');
        expect(Object.keys(knowledge).length).toBeGreaterThan(0);
    });

    it('should have valid topic IDs in topics', () => {
        topics.forEach(topic => {
            expect(topic.id).toBeDefined();
            expect(typeof topic.id).toBe('string');
        });
    });

    it('should have all topics with knowledge content', () => {
        topics.forEach(topic => {
            expect(knowledge[topic.id]).toBeDefined();
            expect(knowledge[topic.id].summary).toBeDefined();
            expect(typeof knowledge[topic.id].summary).toBe('string');
            expect(knowledge[topic.id].concepts).toBeDefined();
            expect(Array.isArray(knowledge[topic.id].concepts)).toBe(true);
        });
    });

    it('should have all topics with flashcards', () => {
        topics.forEach(topic => {
            expect(flashcards[topic.id]).toBeDefined();
            expect(Array.isArray(flashcards[topic.id])).toBe(true);
            expect(flashcards[topic.id].length).toBeGreaterThan(0);
        });
    });

    it('should have valid flashcard structure', () => {
        Object.values(flashcards).forEach(topicFlashcards => {
            topicFlashcards.forEach(card => {
                expect(card.q).toBeDefined();
                expect(card.a).toBeDefined();
                expect(typeof card.q).toBe('string');
                expect(typeof card.a).toBe('string');
            });
        });
    });

    it('should have valid knowledge concept structure', () => {
        Object.values(knowledge).forEach(topicKnowledge => {
            topicKnowledge.concepts.forEach(concept => {
                expect(concept.term).toBeDefined();
                expect(concept.definition).toBeDefined();
                expect(typeof concept.term).toBe('string');
                expect(typeof concept.definition).toBe('string');
            });
        });
    });

    it('should have all required topic properties', () => {
        topics.forEach(topic => {
            expect(topic.title).toBeDefined();
            expect(topic.module).toBeDefined();
            expect(typeof topic.title).toBe('string');
            expect(typeof topic.module).toBe('string');
        });
    });
});
