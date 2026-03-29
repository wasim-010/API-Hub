import React from 'react';
import { SmsProviderMeta } from '../types';
import { DollarSign, Shield, FileText, Clock, Lightbulb, MapPin, Phone, Mail, Globe, AlertTriangle } from 'lucide-react';

interface SmsProviderCardProps {
  meta: SmsProviderMeta;
}

const Val: React.FC<{ value: string }> = ({ value }) => (
  <span className={value && value !== '—' ? 'text-text' : 'text-text-muted italic'}>
    {value || '—'}
  </span>
);

const SmsProviderCard: React.FC<SmsProviderCardProps> = ({ meta }) => {
  return (
    <div className="space-y-10 mt-10">

      {/* Pricing Table */}
      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 bg-surface2 border-b border-border">
          <DollarSign size={18} className="text-green" />
          <h4 className="text-base font-bold text-text">Service & Pricing</h4>
          {meta.floorPrice && meta.floorPrice !== '—' && (
            <span className="ml-auto text-xs bg-green/10 text-green px-2.5 py-1 rounded-full font-medium">
              Floor Price: {meta.floorPrice}
            </span>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left min-w-[500px]">
            <thead className="text-text-muted uppercase font-bold text-xs bg-bg/50">
              <tr>
                <th className="px-5 py-3">Service Type</th>
                <th className="px-5 py-3">Start Price</th>
                <th className="px-5 py-3">Best For</th>
                <th className="px-5 py-3">Key Feature</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {meta.pricing.map((tier, i) => (
                <tr key={i} className="hover:bg-surface2/50 transition-colors">
                  <td className="px-5 py-3.5 font-medium text-accent">{tier.serviceType}</td>
                  <td className="px-5 py-3.5 font-mono text-sm"><Val value={tier.startPrice} /></td>
                  <td className="px-5 py-3.5 text-text-dim"><Val value={tier.bestFor} /></td>
                  <td className="px-5 py-3.5 text-text-dim text-xs"><Val value={tier.keyFeature} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Compliance Rules */}
      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 bg-surface2 border-b border-border">
          <Shield size={18} className="text-yellow" />
          <h4 className="text-base font-bold text-text">BTRC Compliance Rules</h4>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-bg rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 text-xs font-bold text-yellow uppercase tracking-wider mb-2">
                <AlertTriangle size={12} />
                Bangla Language Rule
              </div>
              <p className="text-sm text-text-dim leading-relaxed">
                <Val value={meta.compliance.banglaLanguageRule} />
              </p>
            </div>
            <div className="bg-bg rounded-lg p-4 border border-border">
              <div className="text-xs font-bold text-green uppercase tracking-wider mb-2">English Exceptions</div>
              <p className="text-sm text-text-dim leading-relaxed">
                <Val value={meta.compliance.englishExceptions} />
              </p>
            </div>
            <div className="bg-bg rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 text-xs font-bold text-red uppercase tracking-wider mb-2">
                <AlertTriangle size={12} />
                International OTP
              </div>
              <p className="text-sm text-text-dim leading-relaxed">
                <Val value={meta.compliance.noInternationalOtp} />
              </p>
            </div>
            <div className="bg-bg rounded-lg p-4 border border-border">
              <div className="text-xs font-bold text-red uppercase tracking-wider mb-2">Penalty</div>
              <p className="text-sm text-text-dim leading-relaxed">
                <Val value={meta.compliance.penalty} />
              </p>
            </div>
          </div>

          {/* Character Limits */}
          <div className="bg-bg rounded-lg p-4 border border-border">
            <div className="text-xs font-bold text-accent uppercase tracking-wider mb-3">Character Limits</div>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-surface rounded-lg border border-border">
                <div className="text-lg font-bold font-mono text-text"><Val value={meta.compliance.characterLimits.english} /></div>
                <div className="text-[10px] text-text-muted mt-1 uppercase font-bold">English</div>
              </div>
              <div className="text-center p-3 bg-surface rounded-lg border border-border">
                <div className="text-lg font-bold font-mono text-text"><Val value={meta.compliance.characterLimits.unicode} /></div>
                <div className="text-[10px] text-text-muted mt-1 uppercase font-bold">Unicode (Bangla)</div>
              </div>
              <div className="text-center p-3 bg-surface rounded-lg border border-border">
                <div className="text-lg font-bold font-mono text-text"><Val value={meta.compliance.characterLimits.longSms} /></div>
                <div className="text-[10px] text-text-muted mt-1 uppercase font-bold">Long SMS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Requirements */}
      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 bg-surface2 border-b border-border">
          <FileText size={18} className="text-purple" />
          <h4 className="text-base font-bold text-text">Registration & Required Documents</h4>
          {meta.maskingApproval && meta.maskingApproval !== '—' && (
            <span className="ml-auto text-xs bg-purple/10 text-purple px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
              <Clock size={12} />
              Masking: {meta.maskingApproval}
            </span>
          )}
        </div>
        <div className="p-5">
          <div className="space-y-3">
            {meta.registrationDocs.map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-bg rounded-lg p-4 border border-border">
                <div className="w-6 h-6 rounded-md bg-purple/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-purple text-xs font-bold">{i + 1}</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-purple uppercase tracking-wider mb-1">{doc.category}</div>
                  <p className="text-sm text-text-dim leading-relaxed"><Val value={doc.requirement} /></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pro Tip */}
      {meta.proTip && meta.proTip !== '—' && (
        <div className="bg-teal/5 border border-teal/20 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
              <Lightbulb size={16} className="text-teal" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-teal mb-1">Pro Tip</h4>
              <p className="text-sm text-text-dim leading-relaxed">{meta.proTip}</p>
            </div>
          </div>
        </div>
      )}

      {/* Contact */}
      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 bg-surface2 border-b border-border">
          <Phone size={18} className="text-accent" />
          <h4 className="text-base font-bold text-text">Contact Information</h4>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-text-muted mt-0.5 shrink-0" />
              <div>
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">Address</div>
                <p className="text-sm text-text-dim"><Val value={meta.contact.address} /></p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={16} className="text-text-muted mt-0.5 shrink-0" />
              <div>
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">Phone</div>
                <p className="text-sm text-text-dim"><Val value={meta.contact.phone} /></p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={16} className="text-text-muted mt-0.5 shrink-0" />
              <div>
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">Email</div>
                {meta.contact.email ? (
                  <a href={`mailto:${meta.contact.email}`} className="text-sm text-accent hover:underline">{meta.contact.email}</a>
                ) : (
                  <p className="text-sm text-text-muted italic">—</p>
                )}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe size={16} className="text-text-muted mt-0.5 shrink-0" />
              <div>
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">Website</div>
                {meta.contact.website ? (
                  <a href={meta.contact.website} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">{meta.contact.website}</a>
                ) : (
                  <p className="text-sm text-text-muted italic">—</p>
                )}
              </div>
            </div>
            {meta.contact.fax && (
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-text-muted mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">Fax</div>
                  <p className="text-sm text-text-dim">{meta.contact.fax}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsProviderCard;
