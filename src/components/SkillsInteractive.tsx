"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import SkillsSection from "./SkillsSection";
import { FrontendStack, BackendStack, ToolsAndOthers } from "@/app/data";

const SkillsInteractive = () => {
    return (
        <div className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto" id="skills">
            <SectionTitle title="Technical Skills" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-neutral-900/30 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <SkillsSection
                        title="Frontend Ecosystem"
                        data={FrontendStack}
                    />
                </div>
                <div className="bg-neutral-900/30 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <SkillsSection
                        title="Backend & Services"
                        data={BackendStack}
                    />
                </div>
                <div className="bg-neutral-900/30 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <SkillsSection
                        title="Tools & Foundations"
                        data={ToolsAndOthers}
                    />
                </div>
            </div>
        </div>
    );
};

export default SkillsInteractive;
