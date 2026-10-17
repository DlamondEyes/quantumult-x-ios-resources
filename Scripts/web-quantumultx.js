// Adapted from ddgksf2013 ScriptHub.Surge.sgmodule.
// Author website supports native Quantumult X imports with Lock=1.
const body = $response.body.replace(/Lock\s*=\s*\d/g, 'Lock=1').replace(/<\/i>\s*Surge/g, '</i> QuantumultX');
$done({body});
