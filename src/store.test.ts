import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useDeliveryStore } from './store'
describe('Destination Earth collaboration store', () => { beforeEach(() => setActivePinia(createPinia())); it('loads modelling collaborations from the Java API', async () => { vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => [{ id: 1, title: 'Arctic sea-ice disruption simulation', owner: 'European Canadian Climate Lab', status: 'Approved', priority: 'Low' }] })); const store = useDeliveryStore(); await store.load(); expect(store.offers).toHaveLength(1); expect(store.approvedShare).toBe(100) }) })
